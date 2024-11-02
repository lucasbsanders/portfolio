import { Overlay } from '@angular/cdk/overlay';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormControl,
} from '@angular/forms';
import {
    MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
    MatAutocomplete,
    MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations/public-api';
import { FuseNavigationService } from '@fuse/components/navigation';
import { defaultNavigation } from 'app/mock-api/common/navigation/data';
import { cloneDeep } from 'lodash';
import { debounceTime, filter, map, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    encapsulation: ViewEncapsulation.None,
    exportAs: 'fuseSearch',
    animations: fuseAnimations,
    standalone: true,
    imports: [
        NgIf,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatOptionModule,
        NgFor,
        RouterLink,
        NgTemplateOutlet,
        MatFormFieldModule,
        MatInputModule,
        NgClass,
    ],
    providers: [
        {
            provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
            useFactory: () => {
                const overlay = inject(Overlay);
                return () => overlay.scrollStrategies.block();
            },
        },
    ],
})
export class SearchComponent implements OnChanges, OnInit, OnDestroy {
    private readonly flatNavigation =
        this._fuseNavigationService.getFlatNavigation(defaultNavigation);

    @Input() appearance: 'basic' | 'bar' = 'basic';
    @Input() debounce: number = 0;
    @Input() minLength: number = 2;
    @Output() search: EventEmitter<any> = new EventEmitter<any>();

    opened: boolean = false;
    resultSet: any = null;
    searchControl: UntypedFormControl = new UntypedFormControl();
    private _matAutocomplete: MatAutocomplete;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _elementRef: ElementRef,
        private _httpClient: HttpClient,
        private _renderer2: Renderer2,
        private _fuseNavigationService: FuseNavigationService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any {
        return {
            'search-appearance-bar': this.appearance === 'bar',
            'search-appearance-basic': this.appearance === 'basic',
            'search-opened': this.opened,
        };
    }

    /**
     * Setter for bar search input
     *
     * @param value
     */
    @ViewChild('barSearchInput')
    set barSearchInput(value: ElementRef) {
        // If the value exists, it means that the search input
        // is now in the DOM, and we can focus on the input..
        if (value) {
            // Give Angular time to complete the change detection cycle
            setTimeout(() => {
                // Focus to the input element
                value.nativeElement.focus();
            });
        }
    }

    /**
     * Setter for mat-autocomplete element reference
     *
     * @param value
     */
    @ViewChild('matAutocomplete')
    set matAutocomplete(value: MatAutocomplete) {
        this._matAutocomplete = value;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        // Appearance
        if ('appearance' in changes) {
            // To prevent any issues, close the
            // search after changing the appearance
            this.close();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the search field value changes
        this.searchControl.valueChanges
            .pipe(
                debounceTime(this.debounce),
                takeUntil(this._unsubscribeAll),
                map((value) => {
                    // Set the resultSets to null if there is no value or
                    // the length of the value is smaller than the minLength
                    // so the autocomplete panel can be closed
                    if (value == null)
                        this.resultSet = null;
                    else if (value.length < this.minLength)
                        this.resultSet = cloneDeep(this.flatNavigation);

                    // Continue
                    return value;
                }),
                // Filter out undefined/null/false statements and also
                // filter out the values that are smaller than minLength
                filter((value) => value && value.length >= this.minLength)
            )
            .subscribe((query) => {
                const pagesResults = cloneDeep(this.flatNavigation).filter(
                    (page) =>
                        page.title?.toLowerCase().includes(query.toLowerCase()) ||
                        page.subtitle?.toLowerCase().includes(query.toLowerCase()) ||
                        page.link?.toLowerCase().includes(query.toLowerCase())
                );

                if (pagesResults.length > 0) {
                    // Normalize the results
                    pagesResults.forEach((result: any) => {
                        // Add the page title as the value
                        result.value = result.title;
                    });
                }

                // Store the result sets
                this.resultSet = pagesResults;

                // Execute the event
                this.search.next(pagesResults);
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On keydown of the search input
     *
     * @param event
     */
    onKeydown(event: KeyboardEvent): void {
        // Escape
        if (event.code === 'Escape') {
            // If the appearance is 'bar' and the mat-autocomplete is not open, close the search
            if (this.appearance === 'bar' && !this._matAutocomplete.isOpen) {
                this.close();
            }
        }
    }

    /**
     * Open the search
     * Used in 'bar'
     */
    open(): void {
        // Return if it's already opened
        if (this.opened) {
            return;
        }

        // Open the search
        this.opened = true;

        setTimeout(() => this.searchControl.setValue(''), 225);
    }

    /**
     * Close the search
     * * Used in 'bar'
     */
    close(): void {
        // Return if it's already closed
        if (!this.opened) {
            return;
        }

        // Clear the search input
        this.searchControl.setValue(null);

        // Close the search
        this.opened = false;
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    blurInputBar() {
        if (!this.searchControl.value) this.close();
    }
}

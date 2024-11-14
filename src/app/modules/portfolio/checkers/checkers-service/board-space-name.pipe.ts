import { Pipe, PipeTransform } from '@angular/core';
import { boardColumnNames, boardRowNames } from '../checkers-service/checkers.data';

@Pipe({
    name: 'boardSpaceName',
    standalone: true,
})
export class BoardSpaceNamePipe implements PipeTransform {
    transform(value: number[]): string {
        if (value.length !== 2 || value.some((v) => typeof v !== 'number')) {
            console.error(
                'boardSpaceName pipe - value must be [rowNumber, colNumber]'
            );
            return '';
        }

        return `${boardColumnNames.get(value[0])}${boardRowNames.get(value[1])}`;
    }
}

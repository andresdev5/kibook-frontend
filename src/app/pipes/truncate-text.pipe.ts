import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    standalone: true,
    name: 'truncateText',
    pure: false,
})
export class TruncateTextPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        const limit = args[0] || 100;
        const trail = args[1] || '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}
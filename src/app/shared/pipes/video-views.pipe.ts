import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoViews'
})
export class VideoViewsPipe implements PipeTransform {

  transform(views: string): string {
    const amountViews = +views

    const cases = [2, 0, 1, 1, 1, 2];
    const viewsDeclination = ['просмотр', 'просмотра', 'просмотров']

    if (amountViews >= 1000 && amountViews < 1e6) {
      if (amountViews/1000 >= 10) {
        return `${Math.floor(amountViews/1000)} тыс. просмотров`
      }
      return `${(amountViews/1000).toFixed(1)} тыс. просмотров`
    } else if (amountViews >= 1e6) {
      return `${(amountViews/1e6).toFixed(1)} млн просмотров`
    }
    return `${amountViews} ${viewsDeclination[(amountViews % 100 > 4 && amountViews % 100 < 20) ?
      2 : cases[(amountViews % 10 < 5) ? amountViews % 10 : 5]]}`
  }

}

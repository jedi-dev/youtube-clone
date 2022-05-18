import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOfCreation'
})
export class DateOfCreationPipe implements PipeTransform {

  transform(dateSent: Date): string {
    const currentDate = new Date()
    dateSent = new Date(dateSent)
    const interval = (Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
      - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) )
    const year = Math.round(interval / 1000 / 60 / 60 / 24 / 365)
    const day = Math.round(interval / 1000 / 60 / 60 / 24)
    const hours = Math.round(interval / 1000 / 60 / 60)
    const minutes = (function (): number {
      const minutesFull = Math.round(interval / 1000 / 60)
      return minutesFull < 1 ? 1 : minutesFull
    }())

    const cases = [2, 0, 1, 1, 1, 2];
    const minutesDeclination = ['минута', 'минуты', 'минут']
    const hoursDeclination = ['час', 'часа', 'часов'];
    const dayDeclination = ['день', 'дня', 'дней'];
    const yearDeclination = ['год', 'года', 'лет'];

    const minutesAll =  `${minutes} ${minutesDeclination[(minutes % 100 > 4 && minutes % 100 < 20) ?
      2 : cases[(minutes % 10 < 5) ? minutes % 10 : 5]]}`
    const hoursAll = `${hours} ${hoursDeclination[(hours % 100 > 4 && hours % 100 < 20) ?
      2 : cases[(hours % 10 < 5) ? hours % 10 : 5]]}`
    const dayAll = `${day} ${dayDeclination[(day % 100 > 4 && day % 100 < 20) ?
      2 : cases[(day % 10 < 5) ? day % 10 : 5]]}`
    const yearAll = `${year} ${yearDeclination[(year % 100 > 4 && year % 100 < 20) ?
      2 : cases[(year % 10 < 5) ? year % 10 : 5]]}`

   return minutes < 60 ? minutesAll : (hours < 24 ? hoursAll : (day < 365 ? dayAll : yearAll))
  }

}

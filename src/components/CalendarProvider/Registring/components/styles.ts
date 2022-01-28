import moment from "moment"
import { FreeHours } from 'templates/ConsultancyRead';

function isSelected(day: moment.Moment, value: moment.Moment) {
  if (value.isSame(new Date(), 'month')) {
    return value.isSame(day, 'day')
  }
}

export function beforeToday(day: moment.Moment) {
  return day.isBefore(new Date(), 'day')
}

function isToday(day: moment.Moment) {
  return day.isSame(new Date(), 'day')
}

function daysAvailable(day: moment.Moment, diasCadastrado): any {
    for (let i = 0; i < diasCadastrado.length; i++) {
      if (diasCadastrado[i].day === day.format('DDMMYYYY')){
            return true
          }
      }
    }
  // if (freeHours != undefined) {
  //   for (let i = 0; i < freeHours?.length; i++) {
  //     if (freeHours[i].date === day.format('DDMMYYYY')) {
  //       if (day.isBefore(new Date(), 'day')) {
  //         return false
  //       }
  //       return true
  //     }
  //   }
  // }

export default function dayStyles(day: moment.Moment, value: moment.Moment, diasCadastrado: any) {
  if (daysAvailable(day, diasCadastrado)) return "daysAvailable"
  if (beforeToday(day)) return 'before'
  if (isSelected(day, value)) return 'selected'
  if (isToday(day)) return 'today'
  return ''
}

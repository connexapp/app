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

function daysAvailable(day: moment.Moment, freeHours: FreeHours[], service): any {
  if (service){
    for (let i = 0; i < service?.hours.length; i++) {
      if (service?.hours[i].date === day.format('DDMMYYYY')) {
        if (day.isBefore(new Date(), 'day')) {
          return false
        }
        return true
      }
    }
  }
  if (freeHours != undefined) {
    for (let i = 0; i < freeHours?.length; i++) {
      if (freeHours[i].date === day.format('DDMMYYYY')) {
        if (day.isBefore(new Date(), 'day')) {
          return false
        }
        return true
      }
    }
  }
}

export default function dayStyles(day: moment.Moment, value: moment.Moment, freeHours: FreeHours[], service: any) {
  if (daysAvailable(day, freeHours, service)) return "daysAvailable"
  if (beforeToday(day)) return 'before'
  if (isSelected(day, value)) return 'selected'
  if (isToday(day)) return 'today'
  return ''
}

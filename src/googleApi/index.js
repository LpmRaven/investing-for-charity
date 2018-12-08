import axios from 'axios'

const sheetId = '';
const range = '';
const key = '';

const getUrl = (sheetId, range, key) =>
  `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${key}`

export const getDonorsSummary = () => {
  const filterEmail = window.localStorage.getItem('email')
  return axios.get(getUrl(sheetId, range, key)).then((resp) => {
    const { data: { values } } = resp;

    const headerRow = values[0]
    const emailColumnId = headerRow.indexOf('Email')
    const filteredRow = values.find(row => row[emailColumnId] === filterEmail)

    if (!filteredRow) {
      return undefined
    }

    return filteredRow.reduce(
      (acc, cell, id) => ({
        ...acc,
        [headerRow[id]]: cell,
      }),
      {}
    )
  })
}

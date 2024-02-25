/**
 * Parses the given CSV text and returns an array of objects representing the parsed data.
 *
 * Use a regular expression to split the CSV text into rows while handling '\r'
 * Extract headers (assumes the first row is the header row)
 * Initialize an array to store the parsed data
 * Use the regular expression to split the row while handling '\r'
 * 
 * @param {string} csvText - the CSV text to be parsed
 * @return {Array<object>} an array of objects representing the parsed data
 */
const parseCSV = (csvText) => {
    const rows = csvText.split(/\r?\n/); 
    const headers = rows[0].split(','); 
    const data = []; 
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(','); 
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}   

export default parseCSV;
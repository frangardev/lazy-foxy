/**
 * 
 * @param {num} minimum Número minimo
 * @param {num} maximum Número maximo
 * @returns {num} Número aleatorio entre el número minimo y el maximo.
 */
const Random = (minimum , maximum) => {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

export default Random
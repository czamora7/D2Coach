function convertToSignedInt(num: string): string {
    
    const convertVal = Number(num);

    var result = convertVal >> 32;

    return result.toString()
    
}

export default convertToSignedInt;
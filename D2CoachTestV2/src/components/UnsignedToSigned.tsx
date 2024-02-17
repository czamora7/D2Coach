function convertToSignedInt(num: number): number {
    return num >> 32;
}

export default convertToSignedInt;
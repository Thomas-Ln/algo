function centuryFromYear(year) {
    const century = year / 100;
    
    if(year % 100 === 0) {
        return century;
    }
    
    return Math.floor(century) + 1;
}

// SCRIMBA correction

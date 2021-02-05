function generate() {
    const eras = [];
    for (let i = 2020; i > 1920; i--) {
        if(i > 2018) {
            eras.push( {"year": i, "label": `${i} (令和${i-2018}年)`} );
        } else if (i > 1988) {
            eras.push( {"year": i, "label": `${i} (平成${i-1988}年)`} );
        } else if (i > 1925) {
            eras.push( {"year": i, "label": `${i} (昭和${i-1925}年)`} );
        } else if (i > 1911) {
            eras.push( {"year": i, "label": `${i} (大正${i-1911}年)`} );
        } 
    }
return eras;
}

function month() {
    const months = [];
    for (let i = 1; i <= 12; i++) {
        months.push(i);
    }
return months;
}

function day() {
    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }
return days;
}

export { generate, month, day } 

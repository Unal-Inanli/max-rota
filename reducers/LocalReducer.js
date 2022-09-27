export const localeReducer = (locale, action) => {
    switch (action.name) {
        case 'setLocale': {
            return {
                country_code: action.country_code,
                coountry: action.country,
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}


export const localeInitial = {
    country_code: null,
    country: null
}
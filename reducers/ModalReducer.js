export const modalReducer = (locale, action) => {
    switch (action.type) {
        case 'success': {
            return {
                type: "success",
                title: action.title,
                body: action.body,
            };
        }
        case "failed": {
            return {
                type: "failed",
                title: action.title,
                body: action.body,
            };
        }
        case "remove": {
            return {
                type: null,
                title: null,
                body: null
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}


export const modalInitial = {
    type: null,
    title: null,
    body: null,
}
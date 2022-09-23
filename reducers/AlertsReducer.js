export const alertsReducer = (alerts, action) => {
    switch (action.name) {
        case 'alert': {
            return [...alerts, {
                id: action.id,
                message: action.message,
                type: action.type,
            }];
        }
        case 'remove': {
            return alerts.filter(a => a.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}


export const alertsInitial = []
const initState = {
    projects: [
        {id:'1', title: 'Test 1', content:'test 1 text'},
        {id:'2', title: 'Test 2', content:'test 2 text'},
        {id:'3', title: 'Test 3', content:'test 3 text'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;
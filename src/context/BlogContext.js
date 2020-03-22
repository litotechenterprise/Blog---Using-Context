import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const BlogReducer = (state, action) => {
    switch(action.type) { 
        case 'fetchBlogPost':
            return action.payload;
        case 'editBlogPost':
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
                    return action.payload;
                } else {
                    return blogPost;
                }
            })
        case 'deleteBlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content});
        if (callback) {
            callback();
        }
    }  ;
   
};


const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogpost/${id}`);
       // dispatch({type:'deleteBlogPost', payload: id})


    }
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})

        // dispatch({
        //     type: 'editBlogPost',
        //      payload:{id, title, content}
        // });
        
        if (callback) {
            callback();
        }
    }
};



const fetchBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
    // response.data() === [{}, {}, {}]
        dispatch({type: 'fetchBlogPost', payload: response.data});
    }
}


export const { Context, Provider } = createDataContext(
    BlogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, fetchBlogPost},
    []);

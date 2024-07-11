import { IMAGE_UPLOAD_REQUEST, IMAGE_UPLOAD_SUCCESS, IMAGE_UPLOAD_FAIL } from '../constants/imageConstant';

export const imageUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case IMAGE_UPLOAD_REQUEST:
            return { loading: true };
        case IMAGE_UPLOAD_SUCCESS:
            return { loading: false, success: true, url: action.payload };
        case IMAGE_UPLOAD_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

import { IMAGE_UPLOAD_REQUEST, IMAGE_UPLOAD_SUCCESS, IMAGE_UPLOAD_FAIL } from '../constants/imageConstant';

export const imageUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case IMAGE_UPLOAD_REQUEST:
            return { loader: true };
        case IMAGE_UPLOAD_SUCCESS:
            return { loader: false, success: true, url: action.payload };
        case IMAGE_UPLOAD_FAIL:
            return { loader: false, error: action.payload };
        default:
            return state;
    }
};

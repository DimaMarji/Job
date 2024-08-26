import {TypedUseSelectorHook, useSelector} from 'react-redux';
// TODO RootState
// import {RootState} from '../../Redux/Module1/store';

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;
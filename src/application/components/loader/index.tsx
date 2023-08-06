import {LoaderProps} from './props';
import * as S from './style';

const Loader = (props: LoaderProps) => {
  return <S.Loader>{props.children}</S.Loader>;
};

export default Loader;

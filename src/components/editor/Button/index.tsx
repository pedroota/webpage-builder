import * as S from './styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  return <S.Container variant={variant}>{children}</S.Container>;
};

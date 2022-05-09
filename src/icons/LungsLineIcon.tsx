/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const LungsLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M22.001 17c-.001 4-.001 4-4 4-4 0-5-3-5-6 0-.378-.018-.918-.026-1.55l2.023 1.169L15 15c0 2.776.816 4 3 4 1.14 0 1.61-.007 1.963-.038.03-.351.037-.822.037-1.962 0-3.205-.703-6.033-1.835-7.9-.838-1.382-1.613-1.843-2.032-1.703-.293.098-.605.65-.831 1.623l-1.79-1.033c.369-1.197.982-2.151 1.988-2.487 3-1 6.503 4 6.5 11.5zM8.5 5.5c1.007.336 1.62 1.29 1.989 2.487L8.699 9.02c-.226-.973-.539-1.525-.831-1.623-.42-.14-1.195.32-2.032 1.702C4.703 10.967 4 13.795 4 17c0 1.14.007 1.61.038 1.962.351.031.822.038 1.962.038 2.184 0 3-1.224 3-4l.004-.382 2.023-1.168c-.01.633-.027 1.172-.027 1.55 0 3-1 6-5 6s-4 0-4-4C2 9.5 5.5 4.5 8.5 5.5zM13 2v7.422l4.696 2.712-1 1.732L12 11.155l-4.696 2.711-1-1.732L11 9.422V2h2z" />
    </svg>
  );
};

LungsLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LungsLineIcon = withWrapper(LungsLineIconComponent);
export default LungsLineIcon;

/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DrawImageIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v12.283c0 1.303 1.57 1.962 2.5 1.048l4.03-3.96a.634.634 0 0 0 .02-.021l1.925-1.885.083-.071a.75.75 0 0 1 .966.07l2.08 2.037 1.06-1.06-2.09-2.048-.129-.116a2.25 2.25 0 0 0-3.02.116l-4.452 4.36h.01L4.5 18.46V6.25c0-.966.784-1.75 1.75-1.75h11.5c.967 0 1.75.784 1.75 1.75v4.982c.48-.19.994-.263 1.5-.22V6.25Zm-3.496 2.502a2.252 2.252 0 1 0-4.505 0 2.252 2.252 0 0 0 4.505 0Zm-3.005 0a.752.752 0 1 1 1.505 0 .752.752 0 0 1-1.505 0Zm-1.302 9.82 5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.684 2.684 0 0 1-1.247.707l-1.83.457a.985.985 0 0 1-.15.027c-.59.204-2.979.574-3.827-.088-.574-.448-.46-1.334-.218-1.818.04-.078-.02-.18-.105-.166-.66.103-1.243.45-1.827.799-.783.468-1.57.936-2.549.815-.979-.122-1.468-.726-1.71-1.255-.099-.216.18-.401.388-.287.469.255 1.106.496 1.631.38.375-.084.904-.458 1.496-.877 1.066-.753 2.337-1.653 3.292-1.268.84.337 1.46 1.15 1.03 2.113-.052.118 0 .264.127.293.423.097.778.066 1.133-.105l.428-1.712c.118-.472.362-.903.706-1.247Z"
      />
    </svg>
  );
};

DrawImageIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DrawImageIcon = withWrapper(DrawImageIconComponent);
export default DrawImageIcon;

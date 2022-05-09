/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Number0IconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 1.5c1.321 0 2.484.348 3.447.994.963.645 1.726 1.588 2.249 2.778.522 1.19.804 2.625.804 4.257v4.942c0 1.632-.282 3.068-.804 4.257-.523 1.19-1.286 2.133-2.25 2.778-.962.646-2.125.994-3.446.994-1.321 0-2.484-.348-3.447-.994-.963-.645-1.726-1.588-2.249-2.778-.522-1.19-.804-2.625-.804-4.257V9.529c0-1.632.282-3.068.804-4.257.523-1.19 1.286-2.133 2.25-2.778C9.515 1.848 10.678 1.5 12 1.5zm0 2c-.916 0-1.694.226-2.333.655-.637.427-1.158 1.07-1.532 1.92-.412.94-.635 2.108-.635 3.454v4.942c0 1.346.223 2.514.635 3.453.374.851.895 1.494 1.532 1.921.639.429 1.417.655 2.333.655.916 0 1.694-.226 2.333-.655.637-.427 1.158-1.07 1.532-1.92.412-.94.635-2.108.635-3.454V9.529c0-1.346-.223-2.514-.635-3.453-.374-.851-.895-1.494-1.532-1.921C13.694 3.726 12.916 3.5 12 3.5z" />
    </svg>
  );
};

Number0IconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Number0Icon = withWrapper(Number0IconComponent);
export default Number0Icon;

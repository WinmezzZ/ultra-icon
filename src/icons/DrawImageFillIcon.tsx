/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DrawImageFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path
        fill="currentColor"
        d="m15.66 14.694-2.084-2.046-.129-.117a2.25 2.25 0 0 0-2.888-.006l-.136.123-6.233 6.124A.7.7 0 0 1 3 18.273V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v4.762a3.278 3.278 0 0 0-2.608.95l-2.732 2.732ZM13.5 8.252a2.252 2.252 0 1 0 4.504 0 2.252 2.252 0 0 0-4.505 0Zm2.252-.752a.752.752 0 1 1 0 1.504.752.752 0 0 1 0-1.504Zm-4.278 6.218.084-.071a.75.75 0 0 1 .873-.007l.094.078 2.075 2.037-2.11 2.11a3.686 3.686 0 0 0-.931 1.57c-.345-.536-.87-.915-1.412-1.133-.691-.278-1.386-.16-1.936.035l-.112.04c-.48.168-.864-.408-.53-.791l.21-.241 3.695-3.627Zm7.625-1.049-5.902 5.903a2.684 2.684 0 0 0-.706 1.247l-.428 1.712c-.355.17-.71.202-1.133.105-.126-.03-.18-.175-.127-.293.43-.962-.19-1.776-1.03-2.113-.955-.385-2.226.515-3.292 1.268-.592.42-1.12.793-1.496.876-.525.117-1.162-.123-1.631-.38-.209-.113-.487.072-.388.288.242.529.731 1.133 1.71 1.255.98.121 1.766-.347 2.55-.815.583-.348 1.165-.696 1.826-.799.086-.013.144.088.105.166-.242.484-.356 1.37.218 1.818.848.662 3.237.292 3.828.088a.982.982 0 0 0 .148-.027l1.83-.457a2.684 2.684 0 0 0 1.248-.707l5.903-5.902a2.286 2.286 0 0 0-3.233-3.232Z"
      />
    </svg>
  );
};

DrawImageFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DrawImageFillIcon = withWrapper(DrawImageFillIconComponent);
export default DrawImageFillIcon;

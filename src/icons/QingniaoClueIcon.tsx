/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const QingniaoClueIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="#000"
          d="M1.387 27.28c1.962 9.4 11.124 15.472 20.559 13.7l-.006.004c10.992-1.795 16.14-8.437 20.323-11.761 2.224-1.767 3.39-2.8 4.53-3.396-.747.126-1.227-.101-1.87-.328-.712-.25-1.624-.502-3.315-.278-3.223.428-6.043 3.65-6.043 3.65l-1.72 1.528a17.615 17.615 0 0 1-7.234 3.323 17.657 17.657 0 0 1-12.379-1.963c-4.226-2.415-7.436-6.549-8.506-11.673a17.44 17.44 0 0 1 .416-8.77C2.113 15.365.134 21.283 1.387 27.281Z"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="m21.946 40.98-.006.004c10.992-1.795 16.14-8.437 20.323-11.761 2.224-1.767 3.39-2.8 4.53-3.396-.747.126-1.227-.101-1.87-.328-.712-.25-1.624-.502-3.315-.278-3.223.428-6.043 3.65-6.043 3.65l-1.72 1.528a17.615 17.615 0 0 1-7.234 3.323 17.657 17.657 0 0 1-12.379-1.963c-4.226-2.415-7.436-6.549-8.506-11.673a17.44 17.44 0 0 1 .416-8.77C2.113 15.365.134 21.283 1.387 27.281c1.962 9.398 11.124 15.471 20.559 13.698Z"
          clipRule="evenodd"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M35.749 28.586c-2.675 9.346-12.452 14.764-21.84 12.102C5.724 38.367.538 30.668 1.116 22.538A16.375 16.375 0 0 0 12.954 36.56c8.723 2.475 17.808-2.56 20.293-11.244.718-2.511.806-5.052.358-7.455a16.392 16.392 0 0 0-3.887-7.9 17.656 17.656 0 0 1 5.622 7.732 17.444 17.444 0 0 1 .409 10.894Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="m27.46 32.468.527.919.856-.353.79-.352c1.593-.795 1.518-.675 3.434-1.943 1.917-1.27 2.928-2.04 4.401-3.815l-.82-.649c-.968 1.222-2.036 2.138-3.868 3.351-1.155.765-2.93 1.714-5.32 2.842Z"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M18.696 6.118c2.35 0 4.63.47 6.727 1.335-8.67 2.447-14.15 11.076-12.552 19.99l.002.013a17.907 17.907 0 0 0 .084.43l.01.056a17.443 17.443 0 0 0 .092.408 17.316 17.316 0 0 0 .7 2.27c-2.95-2.1-4.878-4.666-6.119-7.338-1.65-3.554-1.89-7.648-.608-12.8a17.597 17.597 0 0 1 8.782-4.128c.967-.16 1.93-.236 2.882-.236ZM5.386 17.417l.014.35a17.39 17.39 0 0 1 .062-3.218 24.861 24.861 0 0 0-.077 2.868Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

QingniaoClueIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default QingniaoClueIcon;

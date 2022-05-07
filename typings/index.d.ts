import { SVGProps } from 'react';

interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

declare const SVGIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element;

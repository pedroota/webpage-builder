export const isPercentage = (unity: string): boolean => {
  return unity.includes('%');
};

export const percentToPx = (
  unity: string,
  comparativeValue: number | null | undefined
) => {
  if (unity.includes('px') || unity === 'auto' || !comparativeValue) {
    return unity;
  }
  const percent = parseInt(unity);

  return `${(percent / 100) * comparativeValue}px`;
};

export const pxToPercent = (unity: number, comparativeValue: number) => {
  const percent = (Math.abs(unity) / comparativeValue) * 100;

  if (unity < 0) {
    return -1 * percent;
  } else {
    return Math.round(percent);
  }
};

export const getElementDimensions = (element: HTMLElement) => {
  if (!element) {
    return;
  }

  const { paddingTop, paddingBottom, paddingLeft, paddingRight } =
    getComputedStyle(element);

  const height =
    element.clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
  const width =
    element.clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);

  return {
    width,
    height,
  };
};

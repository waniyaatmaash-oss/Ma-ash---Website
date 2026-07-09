/**
 * Custom high-performance smooth scroll utilities using requestAnimationFrame
 * with a luxurious, custom cubic-bezier (easeInOutQuart) easing function.
 */

const easeInOutQuart = (t: number): number => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
};

/**
 * Scrolls the window to a target element with an offset and custom duration/easing.
 */
export function smoothScrollTo(targetElement: HTMLElement, offset = 100, duration = 800) {
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const run = easeInOutQuart(progress);
    
    window.scrollTo(0, startPosition + distance * run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
}

/**
 * Scrolls the window back to the top with custom duration/easing.
 */
export function smoothScrollToTop(duration = 800) {
  const startPosition = window.pageYOffset;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const run = easeInOutQuart(progress);
    
    window.scrollTo(0, startPosition * (1 - run));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
}

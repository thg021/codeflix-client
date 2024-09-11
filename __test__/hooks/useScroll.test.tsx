import { useScroll } from '@/app/hooks/useScroll';
import { renderHook, act } from '@testing-library/react';

describe('useScroll', () => {
  it('should respond to scroll events', () => {
    // precisamos renderizar os hooks

    const { result, rerender } = renderHook(() => useScroll());
    act(() => {
      /* fire events that update state */
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });
    // Simulando um scroll

    expect(result.current).toBeTruthy();

    act(() => {
      /* fire events that update state */
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });
    // Simulando um scroll

    expect(result.current).toBeFalsy();
  });
});

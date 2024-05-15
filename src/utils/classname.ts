/**
 * className을 join해주는 메소드
 *  - 비어있는 값은 필터링을 해줌
 * @param args classNames 목록
 */
export const joinClassNames = (...args: (string | null | undefined)[]) =>
  args.filter((v) => !!v).join(' ');

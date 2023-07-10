import {v4} from 'uuid';

export const applyBreakline = (text: string | undefined) => {
  return (
    <>
      {text?.split(/\n/g).map(line => (
        <span key={v4()}>
          {line}
          <br />
        </span>
      ))}
    </>
  );
};

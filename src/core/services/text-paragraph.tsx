import {v4} from 'uuid';

import {formatBoldItalicText} from './text-bold-italic';

export const applyBreakline = (
  text: string | undefined,
  applyBreakline?: boolean
) => {
  return (
    <>
      {text?.split(/\n/g).map((line, index, array) => (
        <span key={v4()}>
          <div
            dangerouslySetInnerHTML={{
              __html: formatBoldItalicText(line),
            }}
          />

          {!applyBreakline && index !== array.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};

export interface IURLChildren {
  title?: string;
  url: string;
  name?: string;
  children?: IURLChildren[];
}

export const circlePath = (tab: IURLChildren[] = [], preURL: string[] = []) => {
  const newPreURL: string[] = preURL;
  return tab.map((t): string[] => {
    if (t.children) {
      newPreURL.push(t.url);
      circlePath(t.children, newPreURL);
    } else {
      newPreURL.push(t.url);
    }

    return newPreURL;
  })[0];
};

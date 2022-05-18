export class StringUtil {
  public static getInitials(nameString?: string) {
    if (!nameString) {
      return '';
    }

    const initials = nameString.split(' ').map((namePart) => namePart.substr(0, 1));
    return initials ? `${initials[0]}${initials[initials.length - 1]}` : '';
  }

  public static revertString(str: string) {
    if (!str) {
      return '';
    }

    return str.split('').reverse().join('');
  }
}

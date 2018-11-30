export class NoteModel {
  id?: string;
  title: string;
  text: string;
  date?: Date;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}
export class NoteModel {
  key?: string;
  title: string;
  text: string;
  date?: Date;

  constructor(title: string, text: string) {
    this.date = new Date();
    this.title = title;
    this.text = text;
  }
}
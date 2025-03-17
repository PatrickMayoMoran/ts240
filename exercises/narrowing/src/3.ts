function nonEmptyString(arg: string | undefined): void {
  arg && console.log("Input is defined and not empty");
}

nonEmptyString("Meow");
nonEmptyString("");
nonEmptyString(undefined);

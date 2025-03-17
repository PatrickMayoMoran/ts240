interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

let instance: KeyValuePair<string, number> = { key: "Tiny Cat", value: 5 };
let otherInstance: KeyValuePair<boolean, object> = { key: true, value: {} };

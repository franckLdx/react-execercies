import { atom, RecoilState, selectorFamily, SerializableParam } from "recoil"

export function atomMap<KEY extends SerializableParam, VALUE>(keyPrefix: string) {
  type AtomType = RecoilState<VALUE>;
  const atomMap = new Map<KEY, AtomType>();
  const actualPrefix = `atomMap_${keyPrefix}`;

  function add(key: KEY, value: VALUE) {
    const newAtom = atom<VALUE>({
      key: `${actualPrefix}_${key}`,
      default: value
    });
    atomMap.set(key, newAtom);
    return newAtom;
  }

  const get = selectorFamily<VALUE | undefined, KEY>({
    key: `${actualPrefix}_mapSelector`,
    get(key) {
      return ({ get }) => {
        const atom = atomMap.get(key);
        return atom !== undefined ? get(atom) : undefined;
      }
    },
    set(key) {
      return ({ set }, newValue) => {
        const item = atomMap.get(key) as RecoilState<VALUE>;
        return item !== undefined ? set(item, newValue as VALUE) : add(key, newValue as VALUE);
      }
    },
  });

  return { map: atomMap, add, get: get };
}
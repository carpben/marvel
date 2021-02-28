import { EffectCallback, useEffect, useMemo, useRef } from "react";
import { AnyFunction } from "./types";

export const useMountEffect = (fun: EffectCallback) => {
  return useEffect(fun, []);
};

export const useComponentWillMount = (func: AnyFunction) => {
  const willMount = useRef(true);
  if (willMount.current) {
    func();
  }
  useMountEffect(() => {
    willMount.current = false;
  });
};

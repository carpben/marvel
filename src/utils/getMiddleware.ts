import { AnyAction, Dispatch, Middleware } from "redux";

export type MiddlewareBody<S extends object, A extends AnyAction> = (
  dispatch: Dispatch<A>,
  getState: () => S,
  next: (a: A) => unknown,
  action: A
) => unknown;

export const getMiddleware = <Action>(
  func: MiddlewareBody<any, any>
): Middleware => {
  return ({ dispatch, getState }) => (next) => (action: Action) =>
    func(dispatch, getState, next, action);
};

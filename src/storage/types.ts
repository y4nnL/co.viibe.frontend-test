////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// User

export namespace User {
  
  export const namespace = 'user'
  
  export type Data = {
    _id: number
    address: { city: string; postalCode: number; }
    email: string
    firstName: string
    lastName: string
  }
  
  export type ActionContext = {
    commit: Commit;
    dispatch: Dispatch;
    state: State;
    getters: Getters;
    rootState: Root.State;
    rootGetters: Root.Getters;
  }
  
  export type Actions = {
    [K in keyof ActionTree]: Payload<ActionTree[K]>
  }
  
  export type Getters = {
    readonly [K in keyof GetterTree]: ReturnType<GetterTree[K]>
  }
  
  export type Mutations = {
    [K in keyof MutationTree]: Payload<MutationTree[K]>
  }
  
  export type Commit = <K extends keyof Mutations>(type: K, payload: Mutations[K]) => void
  export type Dispatch = <K extends keyof Actions>(type: K, payload: Actions[K]) =>
    ReturnType<ActionTree[K]> extends Promise<any> ? ReturnType<ActionTree[K]> : Promise<ReturnType<ActionTree[K]>>
  
  export type Module = {
    namespaced: false;
    actions: ActionTree;
    getters: GetterTree;
    mutations: MutationTree;
    state: State;
  }
  
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Chat

export namespace Chat {
  
  export const namespace = 'chat'
  
  export type Message = {
    email: string;
    message: string;
  }
  
  export type ActionContext = {
    commit: Commit;
    dispatch: Dispatch;
    state: State;
    getters: Getters;
    rootState: Root.State;
    rootGetters: Root.Getters;
  }
  
  export type ActionTree = {}
  
  export type Actions = {
    [K in keyof ActionTree]: Payload<ActionTree[K]>
  }
  
  export type Getters = {
    readonly [K in keyof GetterTree]: ReturnType<GetterTree[K]>
  }
  
  export type Mutations = {
    [K in keyof MutationTree]: Payload<MutationTree[K]>
  }
  
  export type Commit = <K extends keyof Mutations>(type: K, payload: Mutations[K]) => void
  export type Dispatch = <K extends keyof Actions>(type: K, payload: Actions[K]) =>
    ReturnType<ActionTree[K]> extends Promise<any> ? ReturnType<ActionTree[K]> : Promise<ReturnType<ActionTree[K]>>
  
  export type Module = {
    namespaced: false;
    actions: ActionTree;
    getters: GetterTree;
    mutations: MutationTree;
    state: State;
  }
  
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Root

export declare class Storage {
  readonly state: Root.State
  readonly getters: Root.Getters
  commit: Root.Commit
  dispatch: Root.Dispatch
  watch: Root.Watch
}

export namespace Root {
  
  export type State =
    { readonly [K in typeof User.namespace]: User.State } &
    { readonly [K in typeof Chat.namespace]: Chat.State }
  
  export type Actions =
    { readonly [K in keyof User.Actions]: User.Actions[K] } &
    { readonly [K in keyof Chat.Actions]: Chat.Actions[K] }
  
  export type ActionTree =
    { readonly [K in keyof User.ActionTree]: User.ActionTree[K] } &
    { readonly [K in keyof Chat.ActionTree]: Chat.ActionTree[K] }
  
  export type Getters = { ['']: void } & // TODO <yann>: see why I have to do this sh**
    { readonly [K in keyof User.Getters]: User.Getters[K] } &
    { readonly [K in keyof Chat.Getters]: Chat.Getters[K] }
  
  export type Mutations =
    { readonly [K in keyof User.Mutations]: User.Mutations[K] } &
    { readonly [K in keyof Chat.Mutations]: Chat.Mutations[K] }
  
  export type Commit = <K extends keyof Mutations>(type: K, payload: Mutations[K]) => void
  export type Dispatch = <K extends keyof Actions>(type: K, payload: Actions[K]) =>
    ReturnType<ActionTree[K]> extends Promise<any> ? ReturnType<ActionTree[K]> : Promise<ReturnType<ActionTree[K]>>
  
  export type Watch = <T>(
    getter: (state: State, getters: Getters) => T,
    cb: (value: T, oldValue: T) => void,
  ) => () => void;
  
  export type Module = {
    modules: {
      [User.namespace]: User.Module,
      [Chat.namespace]: Chat.Module,
    };
    strict: true;
  }
  
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Helpers

export type Action<C, R = void, P = void> = (this: Storage, context: C, payload: P) => R

export type Getter<S, G, R> = (
  state: S,
  getters: G,
  rootState: Root.State,
  rootGetters: Root.Getters,
) => R

export type Mutation<S, P> = (state: S, payload: P) => void;

export type Payload<F extends (arg: any, payload: any) => any> =
  F extends (arg: any, payload: infer P) => any ? P : any

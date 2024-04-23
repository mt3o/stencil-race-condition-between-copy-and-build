
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-kyhxkza3bj',
  shadow: true,
})
export class Ckyhxkza3bj {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
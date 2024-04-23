
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-kxgdbgnyig',
  shadow: true,
})
export class Ckxgdbgnyig {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
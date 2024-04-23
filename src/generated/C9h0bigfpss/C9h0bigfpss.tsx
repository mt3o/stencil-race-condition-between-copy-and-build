
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-9h0bigfpss',
  shadow: true,
})
export class C9h0bigfpss {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
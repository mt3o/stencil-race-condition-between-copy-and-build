
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-3fxlqqoa1n',
  shadow: true,
})
export class C3fxlqqoa1n {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
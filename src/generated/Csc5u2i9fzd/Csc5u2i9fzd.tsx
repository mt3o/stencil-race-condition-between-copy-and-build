
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-sc5u2i9fzd',
  shadow: true,
})
export class Csc5u2i9fzd {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  

  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-5fluomxfua',
  shadow: true,
})
export class C5fluomxfua {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
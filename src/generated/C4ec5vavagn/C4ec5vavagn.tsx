
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-4ec5vavagn',
  shadow: true,
})
export class C4ec5vavagn {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  
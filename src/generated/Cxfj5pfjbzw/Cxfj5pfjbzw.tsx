
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-xfj5pfjbzw',
  shadow: true,
})
export class Cxfj5pfjbzw {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  